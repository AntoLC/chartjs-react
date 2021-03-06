const data_camembert = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
    }]
};

/*const data_chart = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
    }]
};*/

const data_chart = {
    datasets: [
        {
          label: 'John',
          data: [
            {
              x: 3,
              y: 7,
              r: 10
            }
          ],
          backgroundColor: ['#36A2EB'],
          hoverBackgroundColor: "#333"
        },
        {
          label: 'Paul',
            data: [
              {
                x: 6,
                y: 2,
                r: 10
              }
            ],
            backgroundColor: ['#FF6384'],
            hoverBackgroundColor: "#666"
        },
        {
          label: 'George',
            data: [
              {
                x: 2,
                y: 6,
                r: 10
              }
            ],
            backgroundColor: ['#FFCE56'],
            hoverBackgroundColor: "#888"
        },
        {
          label: 'Ringo',
            data: [
              {
                x: 5,
                y: 3,
                r: 10
              }
            ],
            backgroundColor: ['#FF3452'],
            hoverBackgroundColor: "#ccc"
        }
    ]
}

module.exports = {
    data_camembert,
    data_chart
};