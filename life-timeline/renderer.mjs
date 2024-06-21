export class MermaidGanttChartRenderer {
    constructor(ganttChart) {
        this.ganttChart = ganttChart;
    }

    formatName(name) {
        return name.split(':').join('#58;')
    }

    generateChart() {
        let chart = `gantt
    title ${this.ganttChart.title}
    todayMarker off
    dateFormat YYYY-MM-DD
    axisFormat %Y\n\n`;

        this.ganttChart.sections.forEach(section => {
            chart += `    section ${section.name}\n`;
            section.tasks.forEach(task => {
                if (task.type === 'milestone') {
                    chart += `    ${this.formatName(task.name)} :milestone, ${task.date.slice(0, 10)}, ${task.duration}\n`;
                } else if (task.type === 'span') {
                    chart += `    ${this.formatName(task.name)} : ${task.startDate}, ${task.endDate}\n`;
                }
            });
        });

        return chart;
    }
}