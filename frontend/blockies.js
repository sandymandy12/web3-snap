import Blockies from 'react-native-blockies';

export default Blockies = (address) => {
  return (
    <Blockies
      blockies={address} //string content to generate icon
      size={32} // blocky icon size
      style={{width:32, height:32}} // style of the view will wrap the icon
    />
  );
}