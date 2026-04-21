
const Bookmark = ({bookmark}) => {

    const {title} = bookmark;

    return (
        
        <div className="bg-gray-50 rounded-lg m-5">
            <h2 className="text-[20px] p-5 font-bold">{title}</h2>
        </div>
    );
};

export default Bookmark;