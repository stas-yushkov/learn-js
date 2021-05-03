const matrix = {
  matrix: [],

  makeRow(symbol, count) {
    const row = [];
    for (let index = 0; index < count; index++) {
      row.push(symbol);
    }
    this.matrix.push(row);
  },

  make({ symbol, rows, columns }) {
    for (let index = 0; index < rows; index++) {
      this.makeRow(symbol, columns);
    }
  },

  updateSymbol({ symbol, rowIndex, columnIndex }) {
    this.matrix[rowIndex][columnIndex] = symbol;
  },

  get() {
    console.table(this.matrix);
  },
};
// const makeProps = {
//   symbol: '💜',
//   rows: 4,
//   columns: 5,
// };
// const insertProps = {
//   symbol: '😾',
//   rowIndex: 1,
//   columnIndex: 1,
// };

matrix.make({
  symbol: '☑️',
  rows: 4,
  columns: 5,
});
matrix.get();
matrix.updateSymbol({
  symbol: '❌',
  rowIndex: 1,
  columnIndex: 1,
});
matrix.get();
