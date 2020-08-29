si = require("""systeminformation""")
render_plugin()

def render_plugin ():
    si = 8
    si.batter().then(init)

def get_charge_color (p: number):
    return ((p > 40) and ("""\u001b[32m""")
            or (p > 20) and ("""\u001b[33m""")
            or (p > 0) and ("""\u001b[31m"""))

def init (battery: any):
    chargeIcon = battery.ischarging and """⚡""" or """"""
    color = get_charge_color(battery.percent)
    console.log(color + chargeIcon + battery.percent + """% | size=13""")
    console.log("""---""")
    console.log("""Refresh|refresh=true""")

class SimpleClass:
    _prop: number = 5
    tryped: number = 6
    only_typed: string

    def method (t: number, v = 4, vt: string = """sff"""):
        if t + v + vt:
            render_plugin()

    def location (x: {z: number, dim: string}, y: number = 6):
        self._coord(x.z, y)

    def _coord (x: number, y: number):
        console.log(1 + 1)
        console.log(222)