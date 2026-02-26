import argparse
from method import empty, userList, userAdd, userDetail, userEdit, userDelete, boardList, boardAdd, boardDetail, boardEdit, boardDelete

DESC = "CLI Program"
commands = [
  {"command":"userlist", "arguments": [], "method": userList},
  {"command":"useradd", "arguments": ['name','email','password','gender'], "method": userAdd},
  {"command":"userdetail", "arguments": ['no'], "method": userDetail},
  {"command":"useredit", "arguments": ['no','key','value'], "method": userEdit},
  {"command":"userdelete", "arguments": ['no'], "method": userDelete},
  {"command":"boardlist", "arguments": [], "method": boardList},
  {"command":"boardadd", "arguments": ['no','title','content'], "method": boardAdd},
  {"command":"boarddetail", "arguments": ['no'], "method": boardDetail},
  {"command":"boardedit", "arguments": ['no','key','value'], "method": boardEdit},
  {"command":"boarddelete", "arguments": ['no'], "method": boardDelete}
]

def checkCLI(args):
  for cmd in commands:
    if args.command == cmd["command"]:
      if cmd["method"] == None:
        empty()
      else:
        cmd["method"](args)
      break
  print("종료")

def run():
  parser = argparse.ArgumentParser(description=DESC)
  subparsers = parser.add_subparsers(dest="command")

  for cmd in commands:
    name = cmd["command"]
    arguments = cmd["arguments"]
    add_parser = subparsers.add_parser(name)
    for arg in arguments:
      add_parser.add_argument(arg)

  checkCLI(parser.parse_args())

if __name__ == "__main__":
  run()
