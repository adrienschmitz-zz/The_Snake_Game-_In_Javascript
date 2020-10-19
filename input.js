let inputDirection = {
    x: 0,
    y: 0
}
let lastinputDirection = {
    x: 0,
    y: 0
}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastinputDirection.y !== 0) break
            inputDirection = {
                x: 0,
                y: -1
            }
            break
        case 'ArrowDown':
            inputDirection = {
                x: 0,
                y: 1
            }
            break
        case 'ArrowLeft':
            inputDirection = {
                x: -1,
                y: 0
            }
            break
        case 'ArrowRight':
            if (lastinputDirection.x !== 0) break
            inputDirection = {
                x: 1,
                y: 0
            }
            break
    }
})

export function getInputDirection() {
    lastinputDirection = inputDirection
    return inputDirection
}