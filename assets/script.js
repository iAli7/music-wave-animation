const musicWaveAnimationWrapper = document.querySelectorAll(".music-wave-animation");

if (musicWaveAnimationWrapper) {
    musicWaveAnimationWrapper.forEach(waveWrapper => {
        const waveStartHeight = waveWrapper.getAttribute("start-height")
        const waveItems = waveWrapper.querySelectorAll(".music-wave-animation-item")

        let waveItemLengthCounter = 0;
        let waveItemHeightCounter = 0;
        waveItems.forEach(waveItem => {
            const waveItemHeightCalc = Number(waveStartHeight) + Number(waveItemHeightCounter)
            waveItem.style.height = `${waveItemHeightCalc}px`

            if (waveItems.length / 2 > waveItemLengthCounter) {
                waveItemHeightCounter += 5
            } else {
                waveItemHeightCounter -= 4
            }

            waveItemLengthCounter += 1
        })
    })
}