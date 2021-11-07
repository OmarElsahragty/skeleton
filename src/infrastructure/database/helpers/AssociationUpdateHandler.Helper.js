const updateAssociatedTuples = async (
  { model, include },
  updateData,
  referenceAttribute,
  referenceValue
) => {
  const existTuples = await model.findAll({
    where: { [referenceAttribute]: referenceValue },
  });

  const deletedTuples = existTuples.filter(
    (tuple) => !updateData.find((item) => tuple.id === item.id)
  );

  await Promise.all(
    deletedTuples.map(async (deletedTuple) => {
      await model.destroy({ where: { id: deletedTuple.id } });
    })
  );

  await Promise.all(
    updateData.map(async (item) => {
      if (!item.id) {
        await model.create(
          { [referenceAttribute]: referenceValue, ...item },
          { include }
        );
      } else {
        await model.update(item, { where: { id: item.id } });
      }
    })
  );
};

const associationUpdateHandler = async (
  DatabaseModel,
  associations,
  updateData,
  id
) => {
  await DatabaseModel.update(updateData, { where: { id } });

  if (!associations) return;

  await Promise.all(
    Object.keys(updateData).map(async (key) => {
      const tupleUpdateData = updateData[key];
      if (!Array.isArray(tupleUpdateData)) return;

      const { model, include, referenceAttribute } =
        associations.find(({ as }) => as === key) || {};
      if (!model || !referenceAttribute) return;

      await updateAssociatedTuples(
        { model, include },
        tupleUpdateData,
        referenceAttribute,
        id
      );

      await Promise.all(
        tupleUpdateData.map(async (associatedTupleItem, itemIndex) => {
          if (!associatedTupleItem.id) return;
          await associationUpdateHandler(
            model,
            include,
            updateData[key][itemIndex],
            associatedTupleItem.id
          );
        })
      );
    })
  );
};

export default associationUpdateHandler;
