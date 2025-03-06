import * as React from 'react'
import {
  GridBlock,
  Cell,
  BLOCK_SIZE,
  GAP_SIZE,
  MOVE_INTERVAL,
  ANIMATION_SPEED,
  EMPTY_STRING,
} from './consts'

export type MovingGridProps = {
  title: string
  gridSize: number
  items: GridBlock[]
}

export type BlockProps = {
  block: GridBlock
}

const Block = ({ block }: BlockProps) => {
  const translateX = block.x * (BLOCK_SIZE + GAP_SIZE)
  const translateY = block.y * (BLOCK_SIZE + GAP_SIZE)

  const handleBlockClick = () => {
    if (block.href.length > 0) {
      window.open(block.href, '_blank', 'noopener, noreferrer')
    }
  }

  return (
    <div
      onClick={handleBlockClick}
      className={`absolute ${block.blockColor} flex items-center justify-center rounded-md shadow-lg transition-transform ease-in-out duration-${ANIMATION_SPEED} h-24 w-24 cursor-pointer hover:scale-[1.01]`}
      style={{
        transform: `translate(${translateX}px, ${translateY}px)`,
      }}
    >
      <block.icon className={`text-6xl ${block.iconColor}`} title={block.alt} />
    </div>
  )
}

const MovingGrid = ({ title, gridSize, items }: MovingGridProps) => {
  const [blocks, setBlocks] = React.useState<GridBlock[]>([])
  const [emptyCells, setEmptyCells] = React.useState<Cell[]>([])
  const [lastMovedBlockId, setLastMovedBlockId] = React.useState<string>(EMPTY_STRING)

  const emptySpaces = gridSize * gridSize - items.length

  const shuffle = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5)
  }

  const initializeAllPositions = (): Cell[] => {
    let grid: Cell[] = []

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        grid.push({ x, y })
      }
    }

    return grid
  }

  const moveBlock = React.useCallback(() => {
    if (blocks.length === 0) return

    const movableBlocks = blocks.filter((block) => {
      if (block.id === lastMovedBlockId) return false
      return emptyCells.some(
        (empty) =>
          (block.x === empty.x && Math.abs(block.y - empty.y) === 1) ||
          (block.y === empty.y && Math.abs(block.x - empty.x) === 1),
      )
    })

    if (movableBlocks.length === 0) {
      setLastMovedBlockId(EMPTY_STRING)
      return
    }

    const randomBlock = movableBlocks[Math.floor(Math.random() * movableBlocks.length)]

    const emptyCellIndex = emptyCells.findIndex(
      (cell) =>
        (randomBlock.x === cell.x && Math.abs(randomBlock.y - cell.y) === 1) ||
        (randomBlock.y === cell.y && Math.abs(randomBlock.x - cell.x) === 1),
    )

    if (emptyCellIndex === -1) return

    const newEmptyCell = { x: randomBlock.x, y: randomBlock.y }
    const movedInto = emptyCells[emptyCellIndex]

    setBlocks((prev) =>
      prev.map((b) => (b.id === randomBlock.id ? { ...b, x: movedInto.x, y: movedInto.y } : b)),
    )

    setEmptyCells((prev) =>
      prev.map((cell, index) => (index === emptyCellIndex ? newEmptyCell : cell)),
    )

    setLastMovedBlockId(randomBlock.id)
  }, [blocks, emptyCells, lastMovedBlockId])

  React.useEffect(() => {
    const allPositions = initializeAllPositions()
    const emptyPositions = shuffle(allPositions).slice(0, emptySpaces)
    const filledPositions = allPositions.filter(
      (pos) => !emptyPositions.some((empty) => empty.x === pos.x && empty.y === pos.y),
    )

    const shuffled = shuffle(items).map((item, index) => ({
      ...item,
      x: filledPositions[index].x,
      y: filledPositions[index].y,
    }))

    setBlocks(shuffled)
    setEmptyCells(emptyPositions)
    setLastMovedBlockId(EMPTY_STRING)
  }, [items])

  React.useEffect(() => {
    const interval = setInterval(moveBlock, MOVE_INTERVAL)
    return () => clearInterval(interval)
  }, [moveBlock])

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-forest-d mb-2 text-3xl font-bold">{title}</h3>
      <div
        className="relative grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, ${BLOCK_SIZE}px)`,
          gridTemplateRows: `repeat(${gridSize}, ${BLOCK_SIZE}px)`,
        }}
      >
        {blocks.map((block) => (
          <Block key={block.id} block={block} />
        ))}
      </div>
    </div>
  )
}

export default MovingGrid
