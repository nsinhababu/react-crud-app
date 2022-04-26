import './styles.css';

const EmptyState = () => {
  return (
    <div className='empty-wrapper'>
      <img src='assets/empty.webp' alt='*empty room' />
      <p>Empty! Click on Add Record button to add data</p>
    </div>
  );
};
export default EmptyState;
