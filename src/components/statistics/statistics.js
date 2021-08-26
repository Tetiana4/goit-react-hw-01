import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(item => (
          <li class="item">
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  tittle: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
