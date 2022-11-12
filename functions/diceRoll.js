module.exports = function (message, authorID) {
    if (message == 'No roll provided') return message
    if (message.match(/([0-9]+[d][0-9]+[s])|([0-9]+[#][0-9]+[d][0-9]+[s])|([0-9]+[d][0-9]+[\+\-\*\/][0-9]+[s])|([0-9]+[#][0-9]+[d][0-9]+[\+\-\*\/][0-9]+[s])|([0-9]+[#][0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+[s])/i)) {
        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+[s]/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            let arg3 = arg2[1].split('+')
            let arg4 = arg3[1].split('*')
            // message.channel.send(`Arguments21372: ${arg1[0]},${arg2[0]},${arg3[0]},${arg4} `)
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let additionalMessage = ""
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg3[0])
                let mathArg1 = parseInt(arg4[0])
                let mathArg2 = parseInt(arg4[1])
                let result = []
                for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                result = result.sort().reverse()
                let suma = result.reduce((a, b) => a + b, 0)
                suma = suma + mathArg1
                suma = suma * mathArg2
                additionalMessage += "+" + mathArg1 + "×" + mathArg2
                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 | result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
                timesToRepeat--
            }
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+[\+\-\*\/][0-9]+[s]/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            let arg3 = []
            if (message.match(/\+/)) {
                arg3 = arg2[1].split('+')
            }else if (message.match(/\-/)) {
                arg3 = arg2[1].split('-')
            }else if (message.match(/\*/)) {
                arg3 = arg2[1].split('*')
            }else if (message.match(/\//)) {
                arg3 = arg2[1].split('/')
            }

            // message.channel.send(`Arguments1: ${arg1[0]},${arg2[0]},${arg3} `)
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let additionalMessage = ""
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg3[0])
                let mathArg = parseInt(arg3[1])
                let result = []
                for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                result = result.sort().reverse()
                let suma = result.reduce((a, b) => a + b, 0)
                if (message.match(/\+/)) {
                    suma = suma + mathArg
                    additionalMessage += "+" + mathArg
                }else if (message.match(/\-/)) {
                    suma = suma - mathArg
                    additionalMessage += "-" + mathArg
                }else if (message.match(/\*/)) {
                    suma = suma * mathArg
                    additionalMessage += "×" + mathArg
                }else if (message.match(/\//)) {
                    suma = suma / mathArg
                    additionalMessage += "/" + mathArg
                }

                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 | result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
                timesToRepeat--
            }
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+[s]/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            // message.channel.send(`Arguments2: ${arg1[0]},${arg2} `)
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg2[1])
                let result = []
                for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                result = result.sort().reverse()
                let suma = result.reduce((a, b) => a + b, 0)
                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 | result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + "\n"
                timesToRepeat--
            }
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+[s]/i)) {
            let arg1 = message.trim().split(/[d]/i)
            let arg2 = arg1[1].split('+')
            let arg3 = arg2[1].split('*')
            // message.channel.send(`ArgumentsXD: ${arg1[0]},${arg2[0]},${arg3} `)
            let resultFormatted = ""
            let dice = parseInt(arg1[0])
            let sides = parseInt(arg2[0])
            let mathArg1 = parseInt(arg3[0])
            let mathArg2 = parseInt(arg3[1])
            let result = []
            for (let i = 0; i < dice; i++){
                var rand = Math.random()
                result.push(Math.floor(rand * sides) + 1)
            }
            result = result.sort().reverse()
            let suma = result.reduce((a, b) => a + b, 0)
            suma = suma + mathArg1
            suma = suma * mathArg2
            let additionalMessage = "+" + mathArg1 + "×" + mathArg2
            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 | result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+[\+\-\*\/][0-9]+[s]/i)) {
            let arg1 = message.trim().split(/[d]/i)
            let arg2 = []
            if (message.match(/\+/)) {
                arg2 = arg1[1].split('+')
            }else if (message.match(/\-/)) {
                arg2 = arg1[1].split('-')
            }else if (message.match(/\*/)) {
                arg2 = arg1[1].split('*')
            }else if (message.match(/\//)) {
                arg2 = arg1[1].split('/')
            }
            // message.channel.send(`Arguments3: ${arg1[0]},${arg2} `)
            let additionalMessage = ""
            let resultFormatted = ""
            let dice = parseInt(arg1[0])
            let sides = parseInt(arg2[0])
            let mathArg = parseInt(arg2[1])
            let result = []
            for (let i = 0; i < dice; i++){
                var rand = Math.random()
                result.push(Math.floor(rand * sides) + 1)
            }
            result = result.sort().reverse()
            let suma = result.reduce((a, b) => a + b, 0)
            if (message.match(/\+/)) {
                suma = suma + mathArg
                additionalMessage += "+" + mathArg
            }else if (message.match(/\-/)) {
                suma = suma - mathArg
                additionalMessage += "-" + mathArg
            }else if (message.match(/\*/)) {
                suma = suma * mathArg
                additionalMessage += "×" + mathArg
            }else if (message.match(/\//)) {
                suma = suma / mathArg
                additionalMessage += "/" + mathArg
            }

            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 | result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+[s]/i)) {
            let arg = message.trim().split(/[d]/i)
            // message.channel.send(`Arguments4: ${arg} `)
            let resultFormatted = ""
            let dice = parseInt(arg[0])
            let sides = parseInt(arg[1])
            let result = []
            for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
            result = result.sort().reverse()
            let suma = result.reduce((a, b) => a + b, 0)
            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 | result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + "\n"
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }
    }
    if (message.match(/([0-9]+[d][0-9]+)|([0-9]+[#][0-9]+[d][0-9]+)|([0-9]+[d][0-9]+[\+\-\*\/][0-9]+)|([0-9]+[#][0-9]+[d][0-9]+[\+\-\*\/][0-9]+)|([0-9]+[#][0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+)/i)) {
        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            let arg3 = arg2[1].split('+')
            let arg4 = arg3[1].split('*')
            // message.channel.send(`Arguments2137: ${arg1[0]},${arg2[0]},${arg3[0]},${arg4} `)
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let additionalMessage = ""
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg3[0])
                let mathArg1 = parseInt(arg4[0])
                let mathArg2 = parseInt(arg4[1])
                let result = []
                for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                let suma = result.reduce((a, b) => a + b, 0)
                suma = suma + mathArg1
                suma = suma * mathArg2
                additionalMessage += "+" + mathArg1 + "×" + mathArg2
                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 | result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
                timesToRepeat--
            }
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+[\+\-\*\/][0-9]+/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            let arg3 = []
            if (message.match(/\+/)) {
                arg3 = arg2[1].split('+')
            }else if (message.match(/\-/)) {
                arg3 = arg2[1].split('-')
            }else if (message.match(/\*/)) {
                arg3 = arg2[1].split('*')
            }else if (message.match(/\//)) {
                arg3 = arg2[1].split('/')
            }

            // message.channel.send(`Arguments1: ${arg1[0]},${arg2[0]},${arg3} `)
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let additionalMessage = ""
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg3[0])
                let mathArg = parseInt(arg3[1])
                let result = []
                for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                let suma = result.reduce((a, b) => a + b, 0)
                if (message.match(/\+/)) {
                    suma = suma + mathArg
                    additionalMessage += "+" + mathArg
                }else if (message.match(/\-/)) {
                    suma = suma - mathArg
                    additionalMessage += "-" + mathArg
                }else if (message.match(/\*/)) {
                    suma = suma * mathArg
                    additionalMessage += "×" + mathArg
                }else if (message.match(/\//)) {
                    suma = suma / mathArg
                    additionalMessage += "/" + mathArg
                }

                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 | result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
                timesToRepeat--
            }
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            // message.channel.send(`Arguments2: ${arg1[0]},${arg2} `)
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg2[1])
                let result = []
                for (let i = 0; i < dice; i++) {
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                let suma = result.reduce((a, b) => a + b, 0)
                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 | result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + "\n"
                timesToRepeat--
            }
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+/i)) {
            let arg1 = message.trim().split(/[d]/i)
            let arg2 = arg1[1].split('+')
            let arg3 = arg2[1].split('*')
            // message.channel.send(`ArgumentsXD: ${arg1[0]},${arg2[0]},${arg3} `)
            let resultFormatted = ""
            let dice = parseInt(arg1[0])
            let sides = parseInt(arg2[0])
            let mathArg1 = parseInt(arg3[0])
            let mathArg2 = parseInt(arg3[1])
            let result = []
            for (let i = 0; i < dice; i++){
                var rand = Math.random()
                result.push(Math.floor(rand * sides) + 1)
            }
            let suma = result.reduce((a, b) => a + b, 0)
            suma = suma + mathArg1
            suma = suma * mathArg2
            let additionalMessage = "+" + mathArg1 + "×" + mathArg2
            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 | result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+[\+\-\*\/][0-9]+/i)) {
            let arg1 = message.trim().split(/[d]/i)
            let arg2 = []
            if (message.match(/\+/)) {
                arg2 = arg1[1].split('+')
            }else if (message.match(/\-/)) {
                arg2 = arg1[1].split('-')
            }else if (message.match(/\*/)) {
                arg2 = arg1[1].split('*')
            }else if (message.match(/\//)) {
                arg2 = arg1[1].split('/')
            }
            // message.channel.send(`Arguments3: ${arg1[0]},${arg2} `)
            let additionalMessage = ""
            let resultFormatted = ""
            let dice = parseInt(arg1[0])
            let sides = parseInt(arg2[0])
            let mathArg = parseInt(arg2[1])
            let result = []
            for (let i = 0; i < dice; i++){
                var rand = Math.random()
                result.push(Math.floor(rand * sides) + 1)
            }
            let suma = result.reduce((a, b) => a + b, 0)
            if (message.match(/\+/)) {
                suma = suma + mathArg
                additionalMessage += "+" + mathArg
            }else if (message.match(/\-/)) {
                suma = suma - mathArg
                additionalMessage += "-" + mathArg
            }else if (message.match(/\*/)) {
                suma = suma * mathArg
                additionalMessage += "×" + mathArg
            }else if (message.match(/\//)) {
                suma = suma / mathArg
                additionalMessage += "/" + mathArg
            }

            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 | result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+/i)) {
            let arg = message.trim().split(/[d]/i)
            // message.channel.send(`Arguments4: ${arg} `)
            let resultFormatted = ""
            let dice = parseInt(arg[0])
            let sides = parseInt(arg[1])
            let result = []
            for (let i = 0; i < dice; i++){
                var rand = Math.random()
                result.push(Math.floor(rand * sides) + 1)
            }
            let suma = result.reduce((a, b) => a + b, 0)
            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 | result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + "\n"
            wiadomosc.substring(0, wiadomosc.length - 2)
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }
    }
}