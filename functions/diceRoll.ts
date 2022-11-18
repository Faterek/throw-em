module.exports = function (message: any, authorID: string, msg: any) {
    if (message == 'No roll provided') return message
    if (message.match(/([0-9]+[d][0-9]+[s])|([0-9]+[#][0-9]+[d][0-9]+[s])|([0-9]+[d][0-9]+[\+\-\*\/][0-9]+[s])|([0-9]+[#][0-9]+[d][0-9]+[\+\-\*\/][0-9]+[s])|([0-9]+[#][0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+[s])/i)) {
        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+[s]/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            let arg3 = arg2[1].split('+')
            let arg4 = arg3[1].split('*')
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let additionalMessage = ""
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg3[0])
                let mathArg1 = parseInt(arg4[0])
                let mathArg2 = parseInt(arg4[1])
                let result : number[] = []
                for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                result = result.sort(function(a, b){return a-b}).reverse()
                let suma = result.reduce((a, b) => a + b, 0)
                suma = suma + mathArg1
                suma = suma * mathArg2
                additionalMessage += "+" + mathArg1 + "×" + mathArg2
                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 || result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
                timesToRepeat--
            }
            wiadomosc.substring(0, wiadomosc.length - 2)
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
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

            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let additionalMessage = ""
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg3[0])
                let mathArg = parseInt(arg3[1])
                let result : number[] = []
                for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                result = result.sort(function(a, b){return a-b}).reverse()
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
                    if (result[i] == 1 || result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
                timesToRepeat--
            }
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+[s]/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg2[1])
                let result : number[] = []
                for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                result = result.sort(function(a, b){return a-b}).reverse()
                let suma = result.reduce((a, b) => a + b, 0)
                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 || result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + "\n"
                timesToRepeat--
            }
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+[s]/i)) {
            let arg1 = message.trim().split(/[d]/i)
            let arg2 = arg1[1].split('+')
            let arg3 = arg2[1].split('*')
            let resultFormatted = ""
            let dice = parseInt(arg1[0])
            let sides = parseInt(arg2[0])
            let mathArg1 = parseInt(arg3[0])
            let mathArg2 = parseInt(arg3[1])
            let result : number[] = []
            for (let i = 0; i < dice; i++){
                var rand = Math.random()
                result.push(Math.floor(rand * sides) + 1)
            }
            result = result.sort(function(a, b){return a-b}).reverse()
            let suma = result.reduce((a, b) => a + b, 0)
            suma = suma + mathArg1
            suma = suma * mathArg2
            let additionalMessage = "+" + mathArg1 + "×" + mathArg2
            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 || result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
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
            let additionalMessage = ""
            let resultFormatted = ""
            let dice = parseInt(arg1[0])
            let sides = parseInt(arg2[0])
            let mathArg = parseInt(arg2[1])
            let result : number[] = []
            for (let i = 0; i < dice; i++){
                var rand = Math.random()
                result.push(Math.floor(rand * sides) + 1)
            }
            result = result.sort(function(a, b){return a-b}).reverse()
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
                if (result[i] == 1 || result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+[s]/i)) {
            let arg = message.trim().split(/[d]/i)
            let resultFormatted = ""
            let dice = parseInt(arg[0])
            let sides = parseInt(arg[1])
            let result : number[] = []
            for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
            result = result.sort(function(a, b){return a-b}).reverse()
            let suma = result.reduce((a, b) => a + b, 0)
            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 || result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + "\n"
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }
    }
    if (message.match(/([0-9]+[d][0-9]+)|([0-9]+[#][0-9]+[d][0-9]+)|([0-9]+[d][0-9]+[\+\-\*\/][0-9]+)|([0-9]+[#][0-9]+[d][0-9]+[\+\-\*\/][0-9]+)|([0-9]+[#][0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+)/i)) {
        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            let arg3 = arg2[1].split('+')
            let arg4 = arg3[1].split('*')
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let additionalMessage = ""
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg3[0])
                let mathArg1 = parseInt(arg4[0])
                let mathArg2 = parseInt(arg4[1])
                let result : number[] = []
                for (let i = 0; i < dice; i++){
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                let suma = result.reduce((a, b) => a + b, 0)
                suma = suma + mathArg1
                suma = suma * mathArg2
                additionalMessage += "+" + mathArg1 + "×" + mathArg2
                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 || result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
                timesToRepeat--
            }
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
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

            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let additionalMessage = ""
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg3[0])
                let mathArg = parseInt(arg3[1])
                let result : number[] = []
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
                    if (result[i] == 1 || result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
                timesToRepeat--
            }
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[#][0-9]+[d][0-9]+/i)) {
            let arg1 = message.trim().split('#')
            let arg2 = arg1[1].split(/[d]/i)
            let wiadomosc = ""
            let timesToRepeat = arg1[0]
            while (timesToRepeat > 0) {
                let resultFormatted = ""
                let dice = parseInt(arg2[0])
                let sides = parseInt(arg2[1])
                let result : number[] = []
                for (let i = 0; i < dice; i++) {
                    var rand = Math.random()
                    result.push(Math.floor(rand * sides) + 1)
                }
                let suma = result.reduce((a, b) => a + b, 0)
                for (let i = 0; i < dice; i++) {
                    if (result[i] == 1 || result[i] == sides)
                        resultFormatted += "**" + result[i] + "**, "
                    else
                        resultFormatted += `${result[i]}` + ", "
                }
                resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
                wiadomosc += "` " + suma + " ` ⟵ [" + resultFormatted + "]" + "\n"
                timesToRepeat--
            }
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+[\+][0-9]+[\*][0-9]+/i)) {
            let arg1 = message.trim().split(/[d]/i)
            let arg2 = arg1[1].split('+')
            let arg3 = arg2[1].split('*')
            let resultFormatted = ""
            let dice = parseInt(arg1[0])
            let sides = parseInt(arg2[0])
            let mathArg1 = parseInt(arg3[0])
            let mathArg2 = parseInt(arg3[1])
            let result : number[] = []
            for (let i = 0; i < dice; i++){
                var rand = Math.random()
                result.push(Math.floor(rand * sides) + 1)
            }
            let suma = result.reduce((a, b) => a + b, 0)
            suma = suma + mathArg1
            suma = suma * mathArg2
            let additionalMessage = "+" + mathArg1 + "×" + mathArg2
            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 || result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
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
            let additionalMessage = ""
            let resultFormatted = ""
            let dice = parseInt(arg1[0])
            let sides = parseInt(arg2[0])
            let mathArg = parseInt(arg2[1])
            let result : number[] = []
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
                if (result[i] == 1 || result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + additionalMessage + "\n"
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }

        if (message.match(/[0-9]+[d][0-9]+/i)) {
            let arg = message.trim().split(/[d]/i)
            let resultFormatted = ""
            let dice = parseInt(arg[0])
            let sides = parseInt(arg[1])
            let result : number[] = []
            for (let i = 0; i < dice; i++){
                var rand = Math.random()
                result.push(Math.floor(rand * sides) + 1)
            }
            let suma = result.reduce((a, b) => a + b, 0)
            for (let i = 0; i < dice; i++) {
                if (result[i] == 1 || result[i] == sides)
                    resultFormatted += "**" + result[i] + "**, "
                else
                    resultFormatted += `${result[i]}` + ", "
            }
            resultFormatted = resultFormatted.substring(0, resultFormatted.length - 2)
            let wiadomosc = "` " + suma + " ` ⟵ [" + resultFormatted + "]" + "\n"
            if(message != null)
                msg.delete()

            if (wiadomosc.length > 3960)
                return ("<@" + authorID + "> " + "**Too long**")
            return ("<@" + authorID + "> " + "**" + message + "**" + "\n" + wiadomosc)
        }
    }
}