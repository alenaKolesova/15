export default function Actors(props) {
    return (
        <>
            <div>Актер: {props.actor.name}</div>
            <div>Роль: {props.actor.role}</div>
        </>
    )
}