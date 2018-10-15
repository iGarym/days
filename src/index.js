import { Flip } from 'number-flip';
import Duration from 'duration';
import 'normalize.css';
import './index.less';

const start = new Date('2016-07-23 12:00:00');
const flips = {};
const keys = [
  'day',
  'days',
  'hour',
  'hours',
  'minute',
  'minutes',
  'month',
  'months',
  'second',
  'seconds',
  'year',
  'years'
];

function loop() {
  const now = new Date();
  const duration = new Duration(start, now);
  keys.forEach(key => {
    const flip = flips[key];
    if (!flip) return;
    flip.flipTo({ to: duration[key] });
  });

  setTimeout(() => {
    loop();
  }, 1000);
}

const getDurationDefault = time => (val = 1) =>
  Math.ceil(time / val)
    .toString()
    .replace(/\d/g, '9');

const getDefaultCount = () => {
  const time = (new Date() - start) / 1000;
  const getDefault = getDurationDefault(time);
  return {
    second: 99,
    seconds: getDefault(),
    minute: 99,
    minutes: getDefault(60),
    hour: 99,
    hours: getDefault(60 * 60),
    day: 99,
    days: getDefault(60 * 60 * 24),
    month: 99,
    months: getDefault(60 * 60 * 24 * 12),
    year: 9,
    year: 9
  };
};

const defaultCount = getDefaultCount();

keys.forEach(key => {
  const node = document.querySelector(`.${key}`);
  if (node) {
    flips[key] = new Flip({
      node,
      from: defaultCount[key],
      duration: 0.3
    });
  }
});

loop();
