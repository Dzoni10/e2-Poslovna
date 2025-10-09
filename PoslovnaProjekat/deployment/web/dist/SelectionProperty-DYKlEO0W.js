import { asProperty, useValue, withSideEffect$, fromComputation$, loading, mapL, toObjectById, asArray, readUntracked, getOrElseL, getActionArguments$, pageScope, deepEqual, isObjectItem, isObjectItemArray, AssertionError, isDataSourceValid, runInAction, fromComputationWithDeepEquality$, action } from './index-DdpIsMV0.js';
import { scheduleAction } from './uEIG9e6s-DXd_R0dy.js';
import { raiseOnChange } from './D5tDSKpV-BMTQuWeb.js';
import './ActionButton-DRrsDoPl.js';

const SelectionProperty = asProperty(({ selectionType, dataSourceId, onChange }, store, widgetId, propertyPath) => {
  const description = `${widgetId}/${propertyPath}`, [slot$, setSlot] = store.useSlot(widgetId, "selection"), [dataSourceItems$] = store.useSlot(widgetId, `${dataSourceId}/items`), [itemMap$, setItemMap] = useValue(`Selected item map of ${description}`, {}), dataSourceItemMap$ = withSideEffect$(`Data source items for ${description}`, fromComputation$(`Data source items by GUID for ${description}`, () => {
    const dataSourceItems = dataSourceItems$.dependOn() ?? loading();
    return mapL(dataSourceItems, toObjectById);
  }), (loadableItemMap) => {
    if ("loading" === loadableItemMap.status)
      return;
    const slot = asArray(readUntracked(slot$)), itemMap = readUntracked(itemMap$), dataSourceItemMap = getOrElseL(loadableItemMap, {}), selection = slot.map((guid) => dataSourceItemMap[guid] ?? itemMap[guid]).filter((o) => void 0 !== o).filter(customKeepSelectionHandler ?? ((object) => object.id in dataSourceItemMap));
    scheduleAction(() => updateSelectedItems(selection));
  }), onChangeHandler = function() {
    if (!onChange)
      return;
    const onChangeArguments$ = getActionArguments$(onChange.argMap, store, widgetId), [form$] = store.useSlot(pageScope, "form");
    return (value, oldValue) => {
      deepEqual(value, oldValue) || raiseOnChange(onChangeArguments$, form$, onChange, widgetId);
    };
  }();
  let customKeepSelectionHandler;
  switch (selectionType) {
    case "Single":
      return selectionValue$();
    case "Multi":
      return void 0 === readUntracked(slot$) && setSlot([]), selectionValue$();
  }
  function updateSelectedItems(items) {
    const guids = items.map((i) => i.id), value = "Single" === selectionType ? guids[0] : guids, oldValue = readUntracked(slot$);
    setSlot(value), setItemMap(toObjectById(items)), onChangeHandler?.(value, oldValue);
  }
  function setSelection(newValue) {
    if (!function(newValue2) {
      return "Single" === selectionType && (void 0 === newValue2 || isObjectItem(newValue2)) || "Multi" === selectionType && isObjectItemArray(newValue2);
    }(newValue))
      throw new AssertionError(`Value ${newValue} is not assignable to selection of type ${selectionType}. (${description})`);
    const newItems = asArray(newValue);
    if (newItems.some((o) => !isDataSourceValid(o, dataSourceId)))
      throw new AssertionError(`An ObjectItem can only be passed to a selection property that belongs to the same data source. (${description})`);
    if (newItems.length > 1 && new Set(newItems.map((o) => o.id)).size !== newItems.length)
      throw new AssertionError(`A multi-selection may not contain duplicate objects. (${description})`);
    runInAction(() => updateSelectedItems(newItems));
  }
  function selectionValue$() {
    const selecteditemMap$ = fromComputationWithDeepEquality$(`Selected items from data source of ${description}`, () => {
      const slot = asArray(slot$.dependOn()), itemMap = itemMap$.dependOn(), dataSourceItemMap = getOrElseL(dataSourceItemMap$.dependOn(), {}), selection = slot.map((guid) => dataSourceItemMap[guid] ?? itemMap[guid]).filter((o) => void 0 !== o);
      return selection.length === slot.length ? selection : Object.values(itemMap);
    });
    return fromComputation$(`Selection value of ${description}`, () => {
      const selection = (value = selecteditemMap$.dependOn(), "Single" === selectionType ? value[0] : value);
      var value;
      return { type: selectionType, name: description, selection: Object.freeze(selection), setSelection: action((newValue) => setSelection(newValue)), setKeepSelection(predicate) {
        customKeepSelectionHandler = predicate;
      } };
    });
  }
});

export { SelectionProperty };
