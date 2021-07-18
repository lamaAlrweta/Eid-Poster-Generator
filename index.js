const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'cert.png'
image.onload = function () {
	drawImage()
}

function drawImage() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '20px monotype corsiva'
	ctx.fillStyle = '#716658'
	ctx.fillText(nameInput.value,220,336)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpeg')
	downloadBtn.download = 'ISPOR_PSAU_Eid - ' + nameInput.value
})
