interface CharacterType {
    title: string,
    name: string,
    power: power[],
    image: string,
    color: string,
    reversed: boolean,
    imgpower: imgpower[],
    citation: citations,
    illustrations: illustrations[],
    customclass: string,
}

interface power {
    name: string,
    description: string
}

interface imgpower {
    img: string,
}

interface citations {
    pre_title: string
    content: string,
    description: string,
}
interface illustrations {
    img: string,
    class: string,
}
export default CharacterType