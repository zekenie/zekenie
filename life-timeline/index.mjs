import { MermaidGanttChart, milestone, span } from "./diagram.mjs";
import { MermaidGanttChartRenderer } from "./renderer.mjs"
import { readFileSync } from 'fs'
// import posts from './posts.json' assert { type: 'json' };

const posts = JSON.parse(readFileSync('./posts.json'))


const chart = new MermaidGanttChart('Life Events Timeline');

chart.section('Professional Experience')
  .add(milestone('Partners in Health', '2010-06-01', '3m'))
  .add(milestone('UCSF', '2011-06-01', '3m'))
  .add(milestone('Beth Israel Deaconess Medical Center', '2012-06-01', '3m'))
  .add(span('Software Engineer, Fiksu', '2014-01-01', '2014-06-30'))
  .add(span('Adjunct Professor, Hampshire College', '2014-01-01', '2014-06-30'))
  .add(span('Lead Instructor, Fullstack Academy', '2014-07-01', '2017-02-28'))
  .add(span('CTO, CoLane', '2016-11-01', '2019-12-01'))
  .add(span('Head of Tech, GetFrank, PBC', '2019-12-01', '2021-10-31'))
  .add(span('Principal Engineer, StitchFix', '2021-10-31', '2022-08-01'))
  .add(span('Staff Engineer, Amazon/One Medical', '2022-08-01', '2024-05-25'));

chart.section('Education')
  .add(span('Hampshire College', '2009-09-01', '2013-05-30'));

chart.section('Residency')
  .add(span('Amherst, MA', '2009-09-01', '2010-05-30'))
  .add(span('Boston, MA', '2010-05-30', '2010-08-31'))
  .add(span('Amherst, MA', '2010-09-01', '2011-05-30'))
  .add(span('San Francisco, CA', '2011-05-30', '2011-08-31'))
  .add(span('Amherst, MA', '2011-09-01', '2012-05-30'))
  .add(span('Boston, MA', '2012-05-30', '2012-08-31'))
  .add(span('Amherst, MA', '2012-09-01', '2014-06-30'))
  .add(span('New York, NY', '2014-06-30', '2015-08-30'))
  .add(span('Chicago, IL', '2015-08-30', '2024-05-25'));

const writing = chart.section('Writing')
  .add(milestone('div iii', '2013-05-01'))
  .add(milestone('Researchers, Hire Hackers', '2013-05-01'))

for (const post of posts) {
  writing.add(milestone(post.title, post.date, '0d'))
}

const renderer = new MermaidGanttChartRenderer(chart);
console.log(renderer.generateChart());