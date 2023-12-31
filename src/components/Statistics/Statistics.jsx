import PropTypes from 'prop-types';
import {
  Statisticscontainer,
  Headstatistics,
  Liststatistics,
  Itemstatistics,
  Itemlabel,
  Itempersantege,
} from './Statistics.module.jsx';

export const Statistics = ({ title, stats }) => {
  return (
    <Statisticscontainer>
      <Headstatistics>{title}</Headstatistics>
      <Liststatistics>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Itemstatistics key={id}>
              <Itemlabel>{label}</Itemlabel>
              <Itempersantege>{percentage}%</Itempersantege>
            </Itemstatistics>
          );
        })}
      </Liststatistics>
    </Statisticscontainer>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
