export default function ActorsInfo({ actorsInfo }){
    
    console.log(actorsInfo);

    return(
        <div>
            <h3>Name: {actorsInfo.name} </h3>
            <p>Age: {actorsInfo.age}</p>
            <p>Profession: {actorsInfo.profession}</p>   
        </div>
    )
}