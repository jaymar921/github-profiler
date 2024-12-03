import express from 'express';
const app = express();

app.get("/profile-information", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(`<svg id="e9kLcotHv0O1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 700" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="4edf2b08b2134c9dafec257fe55ddb3f" export-id="df481149b0654d119466fdb74d347a54" cached="false"><defs><linearGradient id="e9kLcotHv0O4-fill" x1="0" y1="78.21" x2="298.12" y2="78.21" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e9kLcotHv0O4-fill-0" offset="0%" stop-color="#26beef"/><stop id="e9kLcotHv0O4-fill-1" offset="21%" stop-color="#28b5e9"/><stop id="e9kLcotHv0O4-fill-2" offset="53%" stop-color="#309fd8"/><stop id="e9kLcotHv0O4-fill-3" offset="93%" stop-color="#3d7cbe"/><stop id="e9kLcotHv0O4-fill-4" offset="100%" stop-color="#4075b9"/></linearGradient></defs><rect width="400" height="700" rx="0" ry="0" fill="#12cdcd" stroke-width="0"/><rect width="358.781362" height="658.602151" rx="0" ry="0" transform="matrix(1.041958 0 0 1.028575 13.082445 11.289147)" fill="#0c0c0c" stroke-width="0"/><path d="M56.71,106.41l-3.82,8.47-2.47,5.5L35.26,154L17.63,114.88l-3.82-8.47-2.49-5.54L0,75.78h42.92l7.5,16.66l6.29,13.97ZM1.07,0v38.35h93.22l1.68-3.01l12.22-21.93L115.68,0L1.07,0ZM108.49,0l-6.17,13.67L90.86,39.09l-2.41,5.36-7.58,16.8-7.64,16.96-13.81,30.63-3.82,8.47-6.25,13.87-11.38,25.23v.02h42.9l7.58-16.82l10.05-22.3l3.82-8.47l13.81-30.63l7.64-16.96l3.8-8.43l6.19-13.73l11.46-25.42L151.39,0h-42.9Zm61.14,0l-6.15,13.67L152,39.09l-9.99,22.16v.02l-7.64,16.94-13.81,30.63-3.82,8.47-13.83,30.71-3.8,8.41h42.9l17.63-39.12l3.82-8.47l13.81-30.63l3.86-8.59l3.78-8.39l9.99-22.14l11.46-25.44L212.51,0h-42.88Zm21.8,57.94L181.44,80.1l-7.58,16.82v.14h42.84l7.64-16.96l9.99-22.16h-42.9ZM255.2,0l-3.64,8.09-2.51,5.58-11.46,25.42-9.99,22.16-7.64,16.96-7.52,16.66-6.29,13.97-3.82,8.47-17.63,39.12h42.9l17.63-39.12l3.82-8.47l2.51-5.58l11.3-25.05l7.64-16.96l9.99-22.16l10.17-22.56l7.46-16.54h-42.92v.01Z" transform="matrix(.46066 0 0 0.403487 131.33402 42.45762)" fill="url(#e9kLcotHv0O4-fill)"/><text dx="0" dy="0" font-family="&quot;e9kLcotHv0O1:::Roboto&quot;" font-size="27.5" font-weight="400" transform="translate(131.123988 174.372759)" fill="#fff" stroke-width="0"><tspan y="0" font-weight="400" stroke-width="0"><![CDATA[
JayMar921 
]]></tspan></text>
<style><![CDATA[
@font-face {font-family: 'e9kLcotHv0O1:::Roboto';font-style: normal;font-weight: 400;src: url(data:font/ttf;charset=utf-8;base64,AAEAAAASAQAABAAgR0RFRgAVAAoAAAE4AAAAFkdQT1MF8+3vAAADoAAAAKxHU1VCviOi3AAABEwAAAEAT1MvMnT5AiQAAALUAAAAYGNtYXABxgGLAAADNAAAAGxjdnQgK6gHnQAAAoAAAABUZnBnbXf4YKsAAAgMAAABvGdhc3AACAATAAABLAAAAAxnbHlmT/AlywAACcgAAAigaGRteCEYEywAAAFQAAAAIGhlYWT8atJ6AAAB/AAAADZoaGVhCroFswAAAbAAAAAkaG10eEdiBt4AAAI0AAAATGxvY2EXUBnjAAAB1AAAAChtYXhwAkMDCQAAAXAAAAAgbmFtZRudOGoAAAaYAAABdHBvc3T/bQBkAAABkAAAACBwcmVwomb6yQAABUwAAAFJAAEAAgAIAAL//wAPAAEAAAAMAAAAAAAAAAIAAQAFAAkAAQAAAAAAAQAAABgJCAQCBQUFBQgFAwQDAwMDAwMEBQUAAAAAAQAAABMAjwAWAFQABQABAAAAAAAOAAACAAIkAAYAAQADAAAAAAAA/2oAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAds/gwAAAlJ+hv+SgkwAAEAAAAAAAAAAAAAAAAAAAATAAAAYQBhAI8A3wFHAXoByAJCAoACxgMXA0kDmQPFBCQEOARABEgEUAABAAAAAiMS2zmIWl8PPPUAGQgAAAAAAMTwES4AAAAA1QFS9Pob/dUJMAhzAAAACQACAAAAAAAAA4wAZAH7AAAEfgCqBH4AXQR+AGQEagA1BvwAqQRaAG0CtQCMA8kAFgLvAEIC7wB6Au8AQgLvAHoC7wBJAu8ASQN5AFcEfgBdBJIAZAAqAJ0AgACKAHgA1ABkAE4AWgCHAGAAVgA0AjwAvACyAI4AxAAAABT+YAAUApsAIAMhAAsEOgAUBI0AEAWwABQGGAAVAaYAEQbAAA4G2QAGAAAAAAADBIYBkAAFAAAFmgUzAAABHwWaBTMAAAPRAGYCAAAAAgAAAAAAAAAAAIAAAGcAAABLAAAAIAAAAABHT09HAEAAIAB5BgD+AABmB5oCACAAAZ8AAAAABDoFsAAgACAAAwAAAAIAAAADAAAAFAADAAEAAAAUAAQAWAAAABIAEAADAAIAIAAyADkASgBNAGEAcgB5//8AAAAgADEAOQBKAE0AYQByAHn////h/9H/y/+7/7n/pv+W/5AAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAACgAwAD4ABERGTFQAGmN5cmwAGmdyZWsAGmxhdG4AGgAEAAAAAP//AAEAAAABa2VybgAIAAAAAQAAAAEABAACAAAAAQAIAAIAOAAEAAAAUgBCAAUABAAAAAAAAAAAAAAAAP/xAAAAAP/xAAAAAAAAAAAAAAAAAAD/2AASAAAAAgABAAUACQAAAAEABQAFAAMAAAABAAAAAgABAAUABQADAAAAAQAEAAIAAQAAAAoAOAB4AARERkxUABpjeXJsABpncmVrABpsYXRuABoABAAAAAD//wAFAAAAAQACAAMABAAFZG5vbQA6ZnJhYwAybnVtcgAscG51bQAmdG51bQAgAAAAAQABAAAAAQAAAAAAAQAEAAAAAgACAAQAAAABAAMABQBwAFgANAAgAAwAAQAAAAEACAACAGoAAwALAAoADwABAAAAAQAIAAIAVgADAA0ADAAOAAYAAAABAAgAAwABABIAAQBCAAAAAQAAAAMAAQADAAwADQAOAAEAAAABAAgAAQAG//IAAQADABAAEQASAAEAAAABAAgAAQAGAA4AAQADAAIAAwAEsAwrsAArALIBEAIrAbIRAQIrAbcROjAlGxAACCsAtwFIOy4hFAAIK7cCWEg4KBQACCu3A1JDNCUWAAgrtwReTTwrGQAIK7cFNiwiGQ8ACCu3BnFdRjIbAAgrtweRd1w6IwAIK7cIfmdQORoACCu3CVRFNiYUAAgrtwp2YEs2HQAIK7cLg2ROOiMACCu3DNmyimM8AAgrtw0UEAwJBgAIK7cOPDInHBEACCu3D0A0KR0UAAgrtxBQQS4hFAAIKwCyEgsHK7AAIEV9aRhEsj8aAXOyXxoBc7J/GgFzsi8aAXSyTxoBdLJvGgF0so8aAXSyrxoBdLL/GgF0sh8aAXWyPxoBdbJfGgF1sn8aAXWyDx4Bc7J/HgFzsu8eAXOyHx4BdLJfHgF0so8eAXSyzx4BdLL/HgF0sj8eAXWybx4BdbIvIAFzsm8gAXMAAAAAAAAIAGYAAwABBAkAAABeALAAAwABBAkAAQAMAKQAAwABBAkAAgAOAJYAAwABBAkAAwAMAKQAAwABBAkABAAMAKQAAwABBAkABQAmAHAAAwABBAkABgAcAFQAAwABBAkADgBUAAAAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAGEAcABhAGMAaABlAC4AbwByAGcALwBsAGkAYwBlAG4AcwBlAHMALwBMAEkAQwBFAE4AUwBFAC0AMgAuADAAUgBvAGIAbwB0AG8ALQBSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAyAC4AMQAzADcAOwAgADIAMAAxADcAUgBlAGcAdQBsAGEAcgBSAG8AYgBvAHQAbwBDAG8AcAB5AHIAaQBnAGgAdAAgADIAMAAxADEAIABHAG8AbwBnAGwAZQAgAEkAbgBjAC4AIABBAGwAbAAgAFIAaQBnAGgAdABzACAAUgBlAHMAZQByAHYAZQBkAC6wACxLsAlQWLEBAY5ZuAH/hbCEHbEJA19eLbABLCAgRWlEsAFgLbACLLABKiEtsAMsIEawAyVGUlgjWSCKIIpJZIogRiBoYWSwBCVGIGhhZFJYI2WKWS8gsABTWGkgsABUWCGwQFkbaSCwAFRYIbBAZVlZOi2wBCwgRrAEJUZSWCOKWSBGIGphZLAEJUYgamFkUlgjilkv/S2wBSxLILADJlBYUViwgEQbsEBEWRshISBFsMBQWLDARBshWVktsAYsICBFaUSwAWAgIEV9aRhEsAFgLbAHLLAGKi2wCCxLILADJlNYsEAbsABZioogsAMmU1gjIbCAioobiiNZILADJlNYIyGwwIqKG4ojWSCwAyZTWCMhuAEAioobiiNZILADJlNYIyG4AUCKihuKI1kgsAMmU1iwAyVFuAGAUFgjIbgBgCMhG7ADJUUjISMhWRshWUQtsAksS1NYRUQbISFZLbAKLLAoRS2wCyywKUUtsAwssScBiCCKU1i5QAAEAGO4CACIVFi5ACgD6HBZG7AjU1iwIIi4EABUWLkAKAPocFlZWS2wDSywQIi4IABaWLEpAEQbuQApA+hEWS0ABQBkAAADKAWwAAMABgAJAAwADwBxsgwQERESObAMELAA0LAMELAG0LAMELAJ0LAMELAN0ACwAEVYsAIvG7ECHj5ZsABFWLAALxuxABI+WbIEAgAREjmyBQIAERI5sgcCABESObIIAgAREjmxCgz0sgwCABESObINAgAREjmwAhCxDgz0MDEhIREhAxEBAREBAyEBNQEhAyj9PALENv7u/roBDOQCA/7+AQL9/QWw+qQFB/19Anf7EQJ4/V4CXogCXgABAKoAAALZBbcABgA6ALAARViwBS8bsQUePlmwAEVYsAAvG7EAEj5ZsgQABRESObAEL7EDAbAKK1gh2Bv0WbICAwUREjkwMSEjEQU1JTMC2br+iwISHQTRiajHAAEAXQAABDMFxAAXAE8AsABFWLAQLxuxEB4+WbAARViwAC8bsQASPlmxFwGwCitYIdgb9FmwAtCyAxAXERI5sBAQsQkBsAorWCHYG/RZsBAQsAzQshUXEBESOTAxISE1ATY2NTQmIyIGFSM0JDMyFhUUAQEhBDP8RgH4cFWKc4qZuQED2cvs/u7+egLbhQIwf59VcpKdjMn41bHX/tf+WQACAGT//wP4BcQAFwAkAFsAsABFWLALLxuxCx4+WbAARViwEy8bsRMSPlmyAxMLERI5sAMvsgADCxESObATELEUAbAKK1gh2Bv0WbADELEYAbAKK1gh2Bv0WbALELEfAbAKK1gh2Bv0WTAxAQYGIyImJjU0NjYzMhIRFRAABSM1MzY2JTI2NzU0JiMiBhUUFgM+OqFgfrtmb8yI2Pn+sP6tJCfl9v7uXZ0knnl6lI8CgEVUfOGIkup8/r3+6Tb+V/55BZwE5/pyVEq25LuZlcEAAQA1/+wDzAWwAA8ALwCwAEVYsAAvG7EAHj5ZsABFWLAFLxuxBRI+WbAJ0LAFELEMAbAKK1gh2Bv0WTAxATMRFAYjIiY1MxQWMzI2NwMLwfvR2fLAiYJ3kwEFsPv50ezeyH2MlocAAQCpAAAGUgWwAA4AWQCwAEVYsAAvG7EAHj5ZsABFWLACLxuxAh4+WbAARViwBC8bsQQSPlmwAEVYsAgvG7EIEj5ZsABFWLAMLxuxDBI+WbIBAAQREjmyBwAEERI5sgoABBESOTAxCQIzESMREwEjARMRIxEBoQHcAdz5wBL+IpP+IxPABbD7XASk+lACNwJk+2UEmP2f/ckFsAAAAgBt/+wD6gROAB4AKAB8shcpKhESObAXELAg0ACwAEVYsBcvG7EXGj5ZsABFWLAELxuxBBI+WbAARViwAC8bsQASPlmyAhcEERI5sgsXBBESObALL7AXELEPAbAKK1gh2Bv0WbISCxcREjmwBBCxHwGwCitYIdgb9FmwCxCxIwGwCitYIdgb9FkwMSEmJwYjIiY1NCQzMzU0JiMiBhUjNDY2MzIWFxEUFxUlMjY3NSMgFRQWAygQCoGzoM0BAem0dHFjhrpzxXa71AQm/gtXnCOR/qx0IFKGtYupu1Vhc2RHUZdYu6T+DpVYEI1aSN7HV2IAAAEAjAAAApcETgANAEeyBA4PERI5ALAARViwCy8bsQsaPlmwAEVYsAgvG7EIGj5ZsABFWLAFLxuxBRI+WbALELECAbAKK1gh2Bv0WbIJCwUREjkwMQEmIyIHESMRMxc2MzIXApcqMbZBubQDW6c2HAOUB5v9AAQ6fZEOAAABABb+SwOwBDoADwBKsgAQERESOQCwAEVYsAEvG7EBGj5ZsABFWLAOLxuxDho+WbAARViwBS8bsQUUPlmyAA4FERI5sQkBsAorWCHYG/RZsAAQsA3QMDEBEzMBAiMnJzUXMjY3NwEzAe78xv5NZdwjRTJeaSIp/n7KAQ8DK/sf/vIDDZYETGVuBC4AAAEAQgKbAqsFuwAWAFayCBcYERI5ALAARViwDi8bsQ4ePlmwAEVYsAAvG7EAFj5ZsRYCsAorWCHYG/RZsALQsgMOFhESObAOELEIArAKK1gh2Bv0WbAOELAL0LIUFg4REjkwMQEhNQE2NTQmIyIGFSM0NiAWFRQPAiECq/2pASxtQDxLR52nAQiaa1SwAY8Cm2wBGmZFMT1MOXKUf25oa0+RAAEAegKbAe8FsAAGAEGyAQcIERI5ALAARViwBS8bsQUePlmwAEVYsAAvG7EAFj5ZsgQABRESObAEL7EDArAKK1gh2Bv0WbICAwUREjkwMQEjEQc1JTMB753YAWMSApsCWTmAdQABAEIAAAKrAyAAFgBWsggXGBESOQCwAEVYsA4vG7EOGD5ZsABFWLAALxuxABI+WbEVArAKK1gh2Bv0WbAC0LIUFQ4REjmyAw4UERI5sA4QsQgCsAorWCHYG/RZsA4QsAvQMDEhITUBNjU0JiMiBhUjNDYgFhUUDwIhAqv9qQEsbUA8S0edpwEImmtUsAGPbAEaZkUxPUw5cpR/bmhrT5EAAQB6AAAB7wMVAAYANgCwAEVYsAUvG7EFGD5ZsABFWLABLxuxARI+WbIEBQEREjmwBC+xAwKwCitYIdgb9FmwAtAwMSEjEQc1JTMB753YAWMSAlk5gHUAAAIASf/5ApUDIAASAB4AXQCwAEVYsAgvG7EIGD5ZsABFWLAPLxuxDxI+WbICDwgREjmwAi+2DwIfAi8CA12wDxCxEAKwCitYIdgb9FmwAhCxEwKwCitYIdgb9FmwCBCxGQKwCitYIdgb9FkwMQEGIyImNTQ2MzIWFxUQBQc1MjYnMjc1NCYjIgYVFBYB9kVldo2jgYmcA/5zN5aEe14qTzw7TEoBQEGKfnmgpZQ9/mQUAX9inkc8U1BUQ0FOAP//AEkCkQKVBbgDBwAOAAACmAATALAARViwCC8bsQgePlmwGdAwMQD//wBXAAAChgW3AAYAAq0A//8AXQAABDMFxAIGAAMAAP//AGT//wP4BcQABgAEAAA=) format('truetype');}
]]></style>
</svg>
`)
})

const server = app.listen(80, () => {
    console.log("server running")
})

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

export default app;