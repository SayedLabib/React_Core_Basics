
import profile from '../../assets/images/profile.png';

const Header = () => {
    
    return (
        
        

        <header className='max-w-7xl mx-auto flex items-center justify-between py-5 border-b-2 border-gray-300'>
            
          <h1 className='text-3xl font-bold mt-10'>
           knowledge Cafe
          </h1>

          <img src={profile} alt="profile" />

        </header>


    );
};

export default Header;