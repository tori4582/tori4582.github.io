function handleCommand(command) {
    let tokens = command.trim().split(' ');
    let commandName = tokens[0];

    switch (commandName) {
        case 'exit':
            {
                writeln(`See you later!`);
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            };
            break;
        case 'help':
            {}
    }
}

function renderCommandPrompt(commandText) {
    let tokens = commandText.trim().split(' ');

    tokens[0] = `<mark class="tokens__command">${tokens[0]}</mark>`;
    tokens = tokens.map(token => {
        if (!token.startsWith('<mark')) {
            if (token.startsWith("-")) {
                return `<mark class="tokens__flag">${token}</mark>`;
            } else return token;
        } else return token;
    })

    return tokens.join(' ').trim().replace("\n", "");
}

function writeInElement(element, html) {
    element.innerHTML += html;
}

function write(html) {
    const terminalBody = document.getElementById('terminal-body');
    terminalBody.innerHTML += html;
}

function writeln(html) {
    write(`
		<div class="console__section">
			${html}
		</div>
	`);
}

function flowWrite(element, html) {
    const interval = setInterval(() => {
        element.innerHTML += html[0];
        html = html.slice(1);

        if (!html.length || !html[0]) {
            clearInterval(interval);
        }
    }, 10);
}

function flowWriteln(html) {
    const terminalBody = document.getElementById('terminal-body');
    flowWrite(terminalBody, html);
}

function getInputEvent(e) {
    if (e.keyCode === 13) {

        const input = e.target.innerText;

        e.target.innerHTML = '';
        writeInElement(e.target, renderCommandPrompt(input));
        handleCommand(input);

        e.target.removeAttribute('contenteditable');
        e.target.removeAttribute('id');
        createPrompt("~");
    }

    // if (e.keyCode === 32) {
    //     const renderedHtml = renderCommandPrompt(e.target.innerHTML);
    //     e.target.innerHTML = renderedHtml;
    //     let selector = window.getSelection();
    //     selector.removeAllRanges();

    //     let range = document.createRange();
    //     let offset = e.target.innerText.split(' ').length;
    //     selector.setPosition(e.target, offset);
    // }

    e.target.style.width = (e.target.innerText.length + 1) + "em";
}

function createPrompt(directory) {
    const prompt = `
	<div class="console__input">
		<div class="console__prompt">
			<div class="console__user">@tori4582</div>
			:
			<div class="console__pwd">${directory}</div>
			$
		</div>
		<div class="console__command" id="current" contenteditable></div>
    </div>
	`;
    write(prompt);
    const command = document.getElementById('current');
    command.innerHTML = '';
    command.focus();
    command.addEventListener('keypress', getInputEvent);
}

window.onload = async function() {
    await flowWriteln('Welcome to @tori4582 private terminal, type <mark class="tokens__command">"help"</mark> to check what we can do here.');
    createPrompt("~");
}