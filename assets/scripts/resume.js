const obj = {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    }
};

// const bar = new ProgressBar.Line(container, obj);

const mssqlserverf = new ProgressBar.Line(mssqlserver, obj);
const csharpf = new ProgressBar.Line(csharp, obj);
const javaf = new ProgressBar.Line(java, obj);
const frontendf = new ProgressBar.Line(frontend, obj);
const algorithmsf = new ProgressBar.Line(algorithms, obj);

//bar.animate(0.4);

mssqlserverf.animate(0.6);
csharpf.animate(1.0);  // Number from 0.0 to 1.0
javaf.animate(0.3);
frontendf.animate(0.7);
algorithmsf.animate(0.9);
