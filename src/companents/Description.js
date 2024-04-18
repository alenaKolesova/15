export default function Description(props) {
    return (
        <div className='description'>
            <h2>Сюжет</h2>
            <p className='storyline'>{props.description}</p>
        </div>
    )
}