$(document).ready(function(){
    $.ajax({
        url : "../../ChartSpot/server/getspotdatafromdb.php",
        type : "GET",
        success : function(data){
            
            let kWh = [];
            let time = [];

            for (let i in data) {
                let d = new Date(data[i].Time);
                time.push(d.toLocaleString());
                kWh.push(data[i].kWh);
            }

            let chart       = document.getElementById('mycanvas').getContext('2d');
            let gkWh         = chart.createLinearGradient(0, 0, 0, 450);

            gkWh.addColorStop(0, 'rgba(255, 0, 0, 0.5')
            gkWh.addColorStop(0.5, 'rgba(255, 0, 0, 0.25');
            gkWh.addColorStop(1, 'rgba(255, 0, 255, 0)');

            let chartdata = {
                labels: time,
                datasets: [
                    {
                        label: "Data Usage",
                        fill: false,
                        lineTension: 0.1,
                        backroundColor: gkWh,
                        borderColor: "rgba(255, 0, 0, 0.85)",
                        pointBackroundColor: "white",
                        borderWidth: 2, 
                        pointHoverBackroundColor: "rgba(155, 0, 0, 1)",
                        pointHoverBorderColor: "rgba(155, 0, 0, 1)",
                        data: kWh
                    }
                ]
            };

            let options = {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                  easing: 'easeInOutQuad',
                  duration: 520
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                      color: 'rgba(200, 200, 200, 0.05)',
                      lineWidth: 1
                    }
                  }],
                  yAxes: [{
                    gridLines: {
                      color: 'rgba(200, 200, 200, 0.08)',
                      lineWidth: 1
                    }
                  }]
                },
                elements: {
                  line: {
                    tension: 0.4
                  }
                },
                legend: {
                  display: true,
                },
                point: {
                  backgroundColor: 'white'
                },
                tooltips: {
                  titleFontFamily: 'Open Sans',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  titleFontColor: 'white',
                  caretSize: 5,
                  cornerRadius: 2,
                  xPadding: 10,
                  yPadding: 10,
                }
              };

             // Chart.defualts.global.defaultFontColor = "rgba(205, 205, 205, 1)";

              let ctx = $("#mycanvas");

              let LineGraph = new Chart(ctx, {
                type: 'line',
                data: chartdata,
                options: options
              });

        },
        error : function(data) {

        }
        
    });
});