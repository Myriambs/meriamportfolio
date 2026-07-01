import { useState } from 'react'
import { skillGroups } from '@/data/profile'
import { usePerformanceTier } from '@/hooks/usePerformanceTier'
import SkillsOrbit from '@/scenes/SkillsOrbit'

const COLOR_CLASS = {
  signal: 'text-signal border-signal',
  flag: 'text-flag border-flag',
  paper: 'text-paper border-paper',
  slate: 'text-slate border-slate',
}

export default function Skills() {
  const tier = usePerformanceTier()
  const [active, setActive] = useState(null)

  const activeGroup = active ? skillGroups.find((g) => g.group === active.group) : null

  return (
    <section id="skills" className="relative py-28 md:py-36 border-t hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
          <div>
            <span className="status-tag tag-neutral mb-6 w-fit">Stack</span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-paper leading-tight mt-4">
              Every ring is a category.
              <br />
              Every node, a real tool.
            </h2>
          </div>
          <p className="text-slate text-sm max-w-xs">
            Hover to pause the orbit. Click a node to see where it fits.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center mt-10">
          <div className="h-[420px] md:h-[520px] rounded-xl border hairline bg-ink-soft/30">
            {tier === 'off' ? (
              <StaticSkillList onSelect={setActive} active={active} />
            ) : (
              <SkillsOrbit groups={skillGroups} onSelect={setActive} active={active} tier={tier} />
            )}
          </div>

          <div className="border hairline rounded-xl p-6 min-h-[220px] bg-ink-soft/50 backdrop-blur-sm">
            {active ? (
              <>
                <span className={`status-tag ${COLOR_CLASS[activeGroup?.color]?.split(' ')[0] || 'text-slate'}`}>
                  {active.group}
                </span>
                <h3 className="font-display text-2xl text-paper mt-4">{active.name}</h3>
                <p className="text-slate text-sm mt-3 leading-relaxed">
                  Part of Meriam's {active.group.toLowerCase()} toolkit — used across her QA
                  automation work, full-stack projects, and instructor role.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-display text-xl text-paper">Select a node</h3>
                <p className="text-slate text-sm mt-3 leading-relaxed">
                  Click any orbiting technology to see which part of the stack it belongs to.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skillGroups.map((g) => (
                    <span key={g.group} className={`status-tag ${COLOR_CLASS[g.color]}`}>
                      {g.group}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function StaticSkillList({ onSelect, active }) {
  return (
    <div className="p-6 h-full overflow-auto flex flex-col gap-6 justify-center">
      {skillGroups.map((group) => (
        <div key={group.group}>
          <div className="font-mono text-xs uppercase tracking-wider text-slate mb-2">{group.group}</div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((name) => (
              <button
                key={name}
                onClick={() => onSelect({ name, group: group.group })}
                className={`text-xs font-mono px-2.5 py-1 rounded border transition-colors ${
                  active?.name === name
                    ? 'border-signal text-signal'
                    : 'border-line text-slate hover:border-signal hover:text-signal'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
