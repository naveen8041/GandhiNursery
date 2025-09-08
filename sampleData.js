// Sample plant and medicine data for Gandhi Nursery Expo App
export const plants = [
  {
    id: '1',
    name: 'Rose',
    image: require('./assets/rose.jpg'),
    health: 'Healthy',
    schedule: [
      { type: 'Water', time: 'Every 2 days' },
      { type: 'Medicine', time: 'Weekly', medicineType: 'Organic' },
      { type: 'Pesticide', time: 'Monthly' }
    ]
  },
  {
    id: '2',
    name: 'Tulsi',
    image: require('./assets/tulsi.jpg'),
    health: 'Needs Attention',
    schedule: [
      { type: 'Water', time: 'Daily' },
      { type: 'Medicine', time: 'Biweekly', medicineType: 'Non-Organic' },
      { type: 'Pesticide', time: 'Monthly' }
    ]
  }
];

export const medicines = {
  organic: [
    { name: 'Neem Oil', for: 'Pests' },
    { name: 'Compost Tea', for: 'General Health' }
  ],
  nonOrganic: [
    { name: 'Fungicide', for: 'Fungal Issues' },
    { name: 'Insecticide', for: 'Insects' }
  ]
};
