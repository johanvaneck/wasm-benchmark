use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {}

#[wasm_bindgen]
pub fn wasm_fibonacci(n: i32) -> i32 {
    if n == 1 {
        0
    } else if n == 2 {
        1
    } else {
        wasm_fibonacci(n - 1) + wasm_fibonacci(n - 2)
    }
}
