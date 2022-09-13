import React from 'react';
import './PICO8.css';

// export const PICO8 = () => {
//     return (
//         <>
//             <div id="p8_desktop" style={{ display: 'block', position: 'absolute', top: '10px', left: '10px' }}></div> {/* <!-- desktop for saving gifs / screenshots --> */}
//             <div id="p8_frame_0" style={{ maxWidth: '800px', maxHeight: '800px', margin: 'auto' }}> {/* <!-- double function: limit size, and display only this div for touch devices --> */}
//                 <div id="p8_frame" style={{ display: 'flex', width: '100%', maxWidth: '95vw', height: '100vw', maxHeight: '95vh', margin: 'auto' }}>

//                     <div id="p8_menu_buttons_touch" style={{ position: 'absolute', width: '100%', zIndex: 10, left: '0px' }}>
//                         <div className="p8_menu_button" id="p8b_full" style={{ float: 'left', marginLeft: '10px' }} onClick={() => { p8_give_focus(); p8_request_fullscreen(); }}></div>
//                         <div className="p8_menu_button" id="p8b_sound" style={{ float: 'left', marginLeft: '10px' }} onClick={() => { p8_give_focus(); p8_create_audio_context(); Module.pico8ToggleSound(); }}></div>
//                         <div className="p8_menu_button" id="p8b_close" style={{ float: 'right', marginRight: '10px' }} onClick={() => p8_close_cart()}></div>
//                     </div>

//                     {/* <!-- p8_container --> */}
//                     <div id="p8_container"
//                         style={{ margin: 'auto', display: 'table', }}
//                         onClick={() => { p8_create_audio_context(); p8_run_cart(); }}>

//                         <div id="p8_start_button" className="p8_start_button" style={{ width: '100%', height: '100%', display: 'flex' }}>
//                             <img width={80} height={80} style={{ margin: 'auto' }}
//                                 src="data:image/png,base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABpklEQVR42u3au23DQBCEYUXOXIGKcujQXUgFuA0XIKgW90Q9oEAg+Ljd27vd2RsCf058gEDqhofPj+OB6SMCAQlIQAIyAhKQgARkBAQDnM6XSRsB7/2e/tSA0//12fCAKsQX3ntDA4oRFwBRIc0AixE38BAhTQGLEAsBUSDNAXcRhYDRIZsAPlp99VECRoXsDpgN0g0wC6Q7IDpkGEBUyG6A0+vKBtkdMBukG2AWSHdAdMgwgKiQ4QDRIMMCokCGB4wOCQPYFVKw2cABNocUjl6wgE0gFashPKAZpHJ2TQNYBVmxW6cDFENWDv9pAUshCVgJScBKSAISkD9hPkT4GkNAMdzepyj8Kye852EBLe51CZHHWQK4JcThD1SlcHPEYY/0a+A0n6SkGZV6w6WZNb3g4Id1b7hwgGhwYQBR4dwB0eHcALPAdQfMBhcOEA0uDCAqnDsgOpwbYBa4poA/31+rZYFrBriFpwGMCtcEcA9PAhgdzhywBK8EEQXOFFCCtwaIBmcGKMWbI6LCmQBq8R6hw5kAMgISkIAEJCAjIAEJSEBGQI9ukV7lRn9nD+gAAAAASUVORK5CYII=" />
//                         </div>

//                         <div id="p8_playarea" style={{
//                             display: 'none', margin: 'auto',
//                             // -webkit-user-select:none, -moz-user-select: none, user-select: none, -webkit-touch-callout:none,
//                         }}>

//                             <div id="touch_controls_background"
//                                 style={{
//                                     // pointer-events:none,
//                                     display: 'none', backgroundColor: '#000', position: 'fixed', top: '0px', left: '0px', border: 0, width: '100vw', height: '100vh'
//                                 }}>
//                                 &nbsp
//                             </div>

//                             <div style={{ display: 'flex', position: 'relative' }}>
//                                 {/* <!-- pointer-events turned off for mobile in p8_update_layout because need for desktop mouse --> */}
//                                 <canvas className="emscripten" id="canvas" onContextMenu={(event) => { event.preventDefault(); }} >
//                                 </canvas>
//                                 <div className='p8_menu_buttons' id="p8_menu_buttons" style={{ marginLeft: '10px', }}>
//                                     <div className="p8_menu_button" style={{ position: 'absolute', bottom: '125px' }} id="p8b_controls" onClick={() => { p8_give_focus(); Module.pico8ToggleControlMenu(); }}></div>
//                                     <div className="p8_menu_button" style={{ position: 'absolute', bottom: '90px' }} id="p8b_pause" onClick={() => { p8_give_focus(); Module.pico8TogglePaused(); p8_update_layout_hash = -22; }}></div>
//                                     <div className="p8_menu_button" style={{ position: 'absolute', bottom: '55px' }} id="p8b_sound" onClick={() => { p8_give_focus(); p8_create_audio_context(); Module.pico8ToggleSound(); }}></div>
//                                     <div className="p8_menu_button" style={{ position: 'absolute', bottom: '20px' }} id="p8b_full" onClick={() => { p8_give_focus(); p8_request_fullscreen(); }}></div>
//                                 </div>
//                             </div >


//                             {/* <!-- display after first layout update --> */}
//                             <div id="touch_controls_gfx"
//                                 style={{
//                                     // pointer-events:none,
//                                     display: 'table', position: 'fixed', top: '0px', left: '0px', border: 0, width: '100vw', height: '100vh'
//                                 }}>

//                                 <img src="" id="controls_right_panel" style={{ position: 'absolute', opacity: 0.5, }} />
//                                 <img src="" id="controls_left_panel" style={{ position: 'absolute', opacity: 0.5, }} />


//                             </div> {/* <!-- touch_controls_gfx --> */}

//                             {/* <!-- used for clipboard access & keyboard input, displayed and used by PICO-8 only once needed. can be safely removed if clipboard / key presses not needed. -->
//                                 <!-- (needs to be inside p8_playarea so that it still works under Chrome when fullscreened) --> */}
//                             <textarea id="codo_textarea" className="emscripten" style={{ display: 'none', position: 'absolute', left: '-9999px', height: '0px', overflow: 'hidden' }}></textarea>

//                         </div > {/* <!--p8_playarea --> */}

//                     </div >
//                 </div >
//             </div>
//         </>
//     );
// };