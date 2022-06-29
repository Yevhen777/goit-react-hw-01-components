import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <>
      <section className={style.statistics}>
        {title && <h2 className={style.title}>Upload stats</h2>}
        <ul className={style.statList}>
          {stats.map(stat => {
            return (
              <li key={stat.id} className={style.item}>
                <span className={style.lable}>{stat.label}</span>
                <span className={style.percentage}>{stat.percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
