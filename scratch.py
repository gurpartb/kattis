#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Feb  1 16:07:28 2019

@author: gurpartapbhatti
"""

from cpython cimport array
import array

cdef array.array a = array.array('i', [1, 2, 3])
cdef int[:] l = a

print(l)