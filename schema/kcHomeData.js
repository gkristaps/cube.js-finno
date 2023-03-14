cube(`kcHome`, {
  sql: `
  SELECT 
    id,
    date,
    price,
    bedrooms,
    bathrooms,
    sqft_living,
    sqft_lot,
    floors,
    waterfront,
    view,
    condition,
    grade,
    sqft_above,
    sqft_basement,
    yr_built,
    yr_renovated,
    zipcode,
    lat,
    long,
    sqft_living15,
    sqft_lot15
  FROM finno-task.samples.kc_house_data
  `,

  preAggregations: {
  },

  measures: {
    avgPrice: {
      sql: `price`,
      type: `avg`
    },
    deals: {
      sql: `id`,
      type: `count`
    }
  },

  dimensions: {
    date: {
      sql: `cast(left(date,8) as date format 'YYYYmmdd')`,
      type: `time`,
      },
    bedrooms: {
      sql: `bedrooms`,
      type: `string`
    },
    sqftLiving: {
      sql: `sqft_living`,
      type: `string`
    },
    sqftLot: {
      sql: `sqft_lot`,
      type: `string`
    },
    sqftAbove: {
      sql: `sqft_above`,
      type: `string`
    },
    sqftBasement: {
      sql: `sqft_basement`,
      type: `string`
    }
  }
});
