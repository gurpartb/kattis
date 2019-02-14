#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jan 26 21:46:07 2019

This project is work in progressself.
Yet not complete.

@author: gurpartapbhatti
"""

from sys import stdin
import queue

class T:
    def __init__(self):
        self.l = None
        self.r = None
        self.d = None


def f(a):
    """
    Convert ints in array 'a' to a tree stucture.
    Return tree structure as string to the caller.
    """
    t = T()
    c = t
    c.d = 20
    for i in a:
        ins = False
        while not ins:
            j = c.d
            if j >= i:
                if c.l == None:
                    c.l = T()
                c = c.l
            else:
                if c.r == None:
                    c.r = T()
                c = c.r
            if c.d == None:
                c.d = i
                ins = True
    q = queue()
    q.put(t)
    s = ""
    while not q.empty():
        c = q.get()
        if c.l != None:
            q.put(c.l)
            s += "0"
        if c.r != None:
            q.put(c.r)
            s += "1"
    return s


n, k = [int(x) for x in stdin.readline().split()]
S = set()
for i in range(n):
    a = [int(x) for x in stdin.readline().split()]
    #a = [int(x) for x in i.split()]
    s = f(a)
    S.add(s)
print(len(S))
