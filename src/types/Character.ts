interface CharacterType{
    title : string,
    name : string,
    power : power[],
    image: string,
    color: string,
    reversed: boolean
}
interface power{
    name : string,
    description : string
}
export default CharacterType