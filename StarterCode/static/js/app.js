

// // function bbdata (id)


// // d3.json("data/samples.json").then(data)=> { 
// //     console.log(data)
// // }

// const url = "http://robdunnlab.com/projects/belly-button-biodiversity/";

// // Fetch the JSON data and console log it
// d3.json(url).then(function (data) {
//     console.log(data);
// });


// // d3.json("samples.json", function (data) {
// //     console.log(data);
// // });

// var trace1 = {
//     x: ["beer", "wine", "martini", "margarita",
//         "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };

// var data = [trace1];

// var layout = {
//     title: "'Bar' Chart"
// };

// Plotly.newPlot("plot", data, layout);

let url = ‘https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
    let xl = []
let yl = []
Plotly.d3.json(url, function (figure) {
    let data = figure.data
    for (var i = 0; i < data.length; i++) {
        xl.push(data[i][0])
        yl.push(data[i][1])
    }
    let trace = {
        x: xl,
        y: yl,
        marker: {
            color: ‘rgb(55, 83, 109) ’
        },
        type: ’bar’,
        let layout = {
            title: “Belly Button Diversity”,
            yaxis: { title: “USA GDP” },
            xaxis: { title: ‘Date’ }
        }
Plotly.plot(document.getElementById(‘graph’), [trace], layout, { displayModeBar: false });
    })


