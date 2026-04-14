
import profile from '../../assets/images/profile.png';

const Header = () => {
    
    return (
        
        

        <div className='container mx-auto flex items-center justify-between py-5 border-b-2 border-gray-300'>
            
          <h1 className='text-3xl font-bold mt-10'>
           knowledge Cafe
          </h1>

          <img src={profile} alt="profile" />

        </div>


    );
};

export default Header;