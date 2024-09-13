export const options = {
    chart: {
        type: 'pie'
    },
    dataLabels: {
        enabled: true
    },
    legend: {
        position: 'bottom'
    },
    tooltip: {
        enabled: true
    },
    stroke: {
        width: 0
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 500
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    ]
};