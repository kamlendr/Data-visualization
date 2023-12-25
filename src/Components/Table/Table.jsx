import React, { useMemo } from 'react';
import styles from './Table.module.css';
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from '../../Utils/utils';

const Table = (props) => {
  const {
    data = [],
    getValue = (wine) => wine?.Flavanoids || '',
    propertyLabel = 'Flavanoids',
    classIdentifier = 'Alcohol',
  } = props;

  const wineClasses = useMemo(() => {
    //First get a map of wines categorised acc to their class
    const classes = data.reduce((acc, current) => {
      const wineClass = current[classIdentifier];
      acc[wineClass] = [...(acc[wineClass] || []), +getValue(current)];
      return acc;
    }, {});

    const classData = [];

    //Iterating over classes to find mean, median, mode
    for (let wineClass in classes) {
      let obj = {
        id: wineClass,
        mean: +calculateMean(classes[wineClass]).toFixed(3),
        median: +calculateMedian(classes[wineClass]).toFixed(3),
        mode: +calculateMode(classes[wineClass]).toFixed(3),
      };
      classData.push(obj);
    }
    return classData;
  }, [data, classIdentifier, getValue]);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Measure</th>
            {wineClasses.map((v) => (
              <th key={v.id}>Class{v.id}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{propertyLabel} Mean</th>
            {wineClasses.map((v) => (
              <td key={v.id}>{v.mean}</td>
            ))}
          </tr>
          <tr>
            <th>{propertyLabel} Median</th>
            {wineClasses.map((v) => (
              <td key={v.id}>{v.median}</td>
            ))}
          </tr>
          <tr>
            <th>{propertyLabel} Mode</th>
            {wineClasses.map((v) => (
              <td key={v.id}>{v.mode}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
