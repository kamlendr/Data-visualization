const tabs = {
  flavanoids: {
    getValue: (wine) => wine?.Flavanoids || 0,
    propertyLabel: 'Flavanoids',
    id: 'flavanoids',
    classIdentifier: 'Alcohol',
    label: 'Class-wise Flavanoids Stat',
  },
  gamma: {
    getValue: (wine) => (wine.Ash * wine.Hue) / wine.Magnesium,
    propertyLabel: 'Gamma',
    id: 'gamma',
    classIdentifier: 'Alcohol',
    label: 'Class-wise Gamma Stat',
  },
};

export default tabs;
