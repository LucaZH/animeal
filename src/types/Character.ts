interface CharacterType{
    title : string,
    name : string,
    power : power[],
    image: string,
    color: string,
    reversed: boolean,
    imgpower: imgpower[]
}
interface power{
    name : string,
    description : string
}
interface imgpower{
    img: string,
}
export default CharacterType