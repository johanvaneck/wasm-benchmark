// Fibonacci series:
// 1 1 2 3 5 8 13 21 34 55 ...

import init, { wasm_fibonacci } from "./pkg/wasm_benchmark.js";

// Setup Wasm
init().then(() => {
	const jsDiv = document.getElementById("js")
	const wasmDiv = document.getElementById("wasm")

	const testJsButton = document.getElementById("testJS")
	const testWasmButton = document.getElementById("testWasm")

	testJsButton.onclick = () => testJsAndDisplay()
	testWasmButton.onclick = () => testWasmAndDisplay()

	const nInput = document.getElementById("fibN")
	const getN = () => Number.parseInt(nInput.value)

	function jsFibonacci(n) {
		if (n === 1) return 0
		else if (n === 2) return 1
		else return jsFibonacci(n - 1) + jsFibonacci(n - 2)
	}

	function testPerf(fn) {
		const start = performance.now()
		fn();
		const end = performance.now()
		return end - start
	}

	function testJsAndDisplay() {
		jsDiv.innerHTML = "Running..."
		// setTimeout is only used because the DOM takes a while to update first.
		setTimeout(() => {
			const res = testPerf(() => jsFibonacci(getN()))
			jsDiv.innerHTML = res.toFixed(2) + " ms"
		}, 200)
	}

	function testWasmAndDisplay() {
		wasmDiv.innerHTML = "Running..."
		// setTimeout is only used because the DOM takes a while to update first.
		setTimeout(() => {
			const res = testPerf(() => wasm_fibonacci(getN()))
			wasmDiv.innerHTML = res.toFixed(2) + " ms"
		}, 200)
	}

});

