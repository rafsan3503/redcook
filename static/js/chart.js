const chartData = {
    datasets: [
        {
            data: [50, 24, 20, 6],
            datalabels: {
                color: '#fff',
                font: {
                    family: 'Righteous',
                    size: 20,
                },
                formatter: function (value, context) {
                    return `${value}%`;
                }
            },
            backgroundColor: [
                '#578000',
                '#FF6B00',
                '#FF9900',
                '#FF12BC',
                '#8A5CA1',
            ],
            hoverOffset: 4,
        }]
}

const optionsChart = {
    type: 'doughnut',
    data: chartData,
    plugins: [ChartDataLabels],
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            },
            tooltip: {
                enabled: false,
            }
        }
    }
}
const selectorChart = document.querySelector('#chart')

const chart = new Chart(selectorChart, optionsChart)


