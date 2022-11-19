export default async function diceRoll(roll: string, sort: boolean) {
    if(roll.match(/^([0-9]{1,2}|100)d([0-9]{1,2}|100)$/gi)){
        const rolls: number = +roll.substring(0, roll.indexOf("d"))
        const sides: number = +roll.substring(roll.indexOf("d")+1, roll.length)
        let result: number[] = []
        for (let i = 0; i < rolls; i++) {
            result.push(Math.floor(Math.random() * sides) + 1)
        }
        if(sort) {
            result = result.sort(function(a, b){return a-b}).reverse()
        }
        let suma: number = result.reduce((a, b) => a + b, 0)
        let resultFormatted: string = ""
        for (let i = 0; i < rolls; i++) {
            if (result[i] == 1 || result[i] == sides)
                resultFormatted += "**"+result[i]+"**, "
            else
                resultFormatted += result[i] + ", "
        }
        resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
        let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]\n"
        if (wiadomosc.length > 3960) return("Too large roll")
        return wiadomosc
    } else if(roll.match(/^([0-9]{1,2}|100)#([0-9]{1,2}|100)d([0-9]{1,2})|(100)$/gi)) {
        const times: number = +roll.substring(0, roll.indexOf("#"))
        const rolls: number = +roll.substring(roll.indexOf("#")+1, roll.indexOf("d"))
        const sides: number = +roll.substring(roll.indexOf("d")+1, roll.length)
        let wiadomosc: string = ""
        for (let i = 0; i < times; i++) {
            let result: number[] = []
            let resultFormatted: string = ""
            for (let i = 0; i < rolls; i++) {
                result.push(Math.floor(Math.random() * sides) + 1)
            }
            if(sort) {
                result = result.sort(function(a, b){return a-b}).reverse()
            }
            let suma: number = result.reduce((a, b) => a + b, 0)
            for (let i = 0; i < rolls; i++) {
                if (result[i] == 1 || result[i] == sides)
                    resultFormatted += `**${result[i]}**, `
                else
                    resultFormatted += result[i] + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]\n"
            if (wiadomosc.length > 3960) return("Too large roll")
        }
        return wiadomosc
    } else return("Invalid roll, max 100 for all numbers")
}