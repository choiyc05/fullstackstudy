print("파이썬")

import argparse
from cmd import add, list

parser = argparse.ArgumentParser(description="CLI 프로그램")
subparsers = parser.add_subparsers(dest="command")

add_parser = subparsers.add_parser("add", help="메모 추가")
add_parser.add_argument("a", help="메모 추가")
add_parser.add_argument("b", help="메모 추가")

add_parser = subparsers.add_parser("list", help="목록 보기")

args = parser.parse_args()

if args.command == "add":
    add(args.a, args.b)
elif args.command == "list":
    list()