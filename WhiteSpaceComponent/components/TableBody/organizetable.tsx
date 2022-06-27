export const OrganizeTable = (portfolioLines: any, whitespacedetail: any) => {
  const getAllFilters = (portfolioLines: any, whitespacedetail: any) => {
    let arrName = [];
    arrName = portfolioLines.map(
      (row: any) => row['swo_portfoliolinesforwhitespaceid'],
    );
    return arrName.map((name: any) =>
      whitespacedetail.entities.filter(
        (row: any) => row['_swo_portfoliolinesforwhitespaceid_value'] === name,
      ),
    );
  };

  const distict = (value: any, index: any, self: any) => {
    return self.indexOf(value) === index;
  };

  const getLength = (whitespacedetail: any) => {
    let arrNames = [];
    arrNames = whitespacedetail.entities.map(
      (row: any) => row['_swo_portfoliolinesforwhitespaceid_value'],
    );
    let distictNames: any[] = [];
    distictNames.push(arrNames.filter(distict));
    const genArraylength = [];

    for (let i = 0; i < distictNames[0].length; i++) {
      genArraylength.push(
        whitespacedetail.entities.filter(
          (row: any) =>
            row['_swo_portfoliolinesforwhitespaceid_value'] ===
            distictNames[0][i],
        ).length,
      );
    }

    return (genArraylength.sort()[genArraylength.length - 1] || 0) + 1;
  };

  const createMatrix = (
    c: number,
    r: number,
    filter: any,
    portfolioLines: any,
  ) => {
    const Matrix = Array(r)
      .fill(null)
      .map(() => Array(c).fill(null));

    for (let i = 0; i < c; i++) {
      for (let j = 0; j < r; j++) {
        Matrix[j][i] =
          filter[i][j] === undefined
            ? {
                '_swo_licensemodelid_value@OData.Community.Display.V1.FormattedValue':
                  '---',
                _swo_portfoliolinesforwhitespaceid_value:
                  portfolioLines[i]['swo_portfoliolinesforwhitespaceid'],
                '_swo_portfoliolinesforwhitespaceid_value@OData.Community.Display.V1.FormattedValue':
                  portfolioLines[i]['swo_name'],
              }
            : filter[i][j];
      }
    }
    return Matrix;
  };

  const filter = getAllFilters(portfolioLines, whitespacedetail);
  const r = getLength(whitespacedetail);
  const c = portfolioLines.length;

  return createMatrix(c, r, filter, portfolioLines);
};
