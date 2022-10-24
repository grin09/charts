import { add } from 'date-fns'

export function chartDataGenarator(count: number):Array<{x: number | Date, y: number | null}> {
  const today = new Date()
  const data = []

  for(let i = count; i >= 0; i--) {
    let value = Math.floor(Math.random() * 11)
    data.push({
      x: add(today, { days: -i }),
      y: value
    })
  }

  return data
}

// datasets = [{
//   label: '1-10',
//   data: [],
//   borderColor: '#4CAF50',
//   backgroundColor: '#4CAF50',
//   borderWidth: 2,
//   showLine: true,
//   tension: .5
// }, {
//   label: '11-25',
//   data: [],
//   borderColor: '#8BC34A',
//   backgroundColor: '#8BC34A',
//   borderWidth: 2,
//   showLine: true,
//   tension: .5
// }, {
//   label: '26-50',
//   data: [],
//   borderColor: '#FFC700',
//   backgroundColor: '#FFC700',
//   borderWidth: 2,
//   showLine: true,
//   tension: .5
// }, {
//   label: '51-100',
//   data: [],
//   borderColor: '#FF7A00',
//   backgroundColor: '#FF7A00',
//   borderWidth: 2,
//   showLine: true,
//   tension: .5
// }, {
//   label: '100+',
//   data: [],
//   borderColor: '#F44336',
//   backgroundColor: '#F44336',
//   borderWidth: 2,
//   showLine: true,
//   tension: .5
// }]