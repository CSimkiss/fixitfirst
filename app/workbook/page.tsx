'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

type Note = {
  id: string
  text: string
  createdAt: string
  done: boolean
}

const STORAGE_KEY = 'fixitfirst-workbook'

export default function WorkbookPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [input, setInput] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setNotes(JSON.parse(saved))
    } catch {}
    setMounted(true)
  }, [])

  function save(updated: Note[]) {
    setNotes(updated)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch {}
  }

  function addNote() {
    const text = input.trim()
    if (!text) return
    const note: Note = {
      id: Date.now().toString(),
      text,
      createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      done: false,
    }
    save([note, ...notes])
    setInput('')
  }

  function toggleDone(id: string) {
    save(notes.map(n => n.id === id ? { ...n, done: !n.done } : n))
  }

  function deleteNote(id: string) {
    save(notes.filter(n => n.id !== id))
  }

  const pending = notes.filter(n => !n.done)
  const done = notes.filter(n => n.done)

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <a href="/" className="text-sm text-gray-400 hover:text-orange-400 mb-4 inline-block">← Back to home</a>
        <div className="text-4xl mb-3">📓</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">My Workbook</h1>
        <p className="text-gray-300">Your personal jobs list. Saves to your browser automatically.</p>
      </div>

      <div className="max-w-xl mx-auto px-6 py-10">

        {/* Add note */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Add a job or note</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addNote()}
              placeholder="e.g. Fix the dripping bathroom tap"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <button
              onClick={addNote}
              disabled={!input.trim()}
              className="bg-orange-500 text-white px-5 py-3 rounded-xl font-medium hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            >
              Add
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">Press Enter or click Add. Your notes save automatically to this browser.</p>
        </div>

        {notes.length === 0 && (
          <div className="text-center py-12 border border-dashed border-gray-200 rounded-xl text-gray-400">
            <p className="text-3xl mb-2">📝</p>
            <p className="font-medium mb-1">No jobs yet</p>
            <p className="text-sm">Add your first job or note above.</p>
          </div>
        )}

        {/* Pending */}
        {pending.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              To do <span className="text-orange-500">({pending.length})</span>
            </h2>
            <div className="space-y-2">
              {pending.map(note => (
                <div
                  key={note.id}
                  className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 bg-white"
                >
                  <button
                    onClick={() => toggleDone(note.id)}
                    className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5 hover:border-green-500 transition-colors"
                    aria-label="Mark done"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{note.text}</p>
                    <p className="text-xs text-gray-400 mt-1">Added {note.createdAt}</p>
                  </div>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0 text-lg leading-none"
                    aria-label="Delete"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Done */}
        {done.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Done <span className="text-green-500">({done.length})</span>
            </h2>
            <div className="space-y-2">
              {done.map(note => (
                <div
                  key={note.id}
                  className="flex items-start gap-3 border border-green-100 rounded-xl p-4 bg-green-50"
                >
                  <button
                    onClick={() => toggleDone(note.id)}
                    className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5 flex items-center justify-center text-white text-xs font-bold"
                    aria-label="Mark undone"
                  >
                    ✓
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-green-800 line-through">{note.text}</p>
                    <p className="text-xs text-green-500 mt-1">Completed · Added {note.createdAt}</p>
                  </div>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="text-green-300 hover:text-red-400 transition-colors flex-shrink-0 text-lg leading-none"
                    aria-label="Delete"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 bg-gray-50 rounded-xl p-5">
          <p className="text-xs text-gray-400 text-center">Notes are stored in your browser only. They won&apos;t transfer between devices.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
