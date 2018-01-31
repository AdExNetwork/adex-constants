const { objPropsById, toMilliseconds, mapArrayByProp } = require('./helper')

const BID_STATES = {
    DoesNotExist: { id: 0, value: 'DoesNotExist', label: 'BID_STATE_DOES_NOT_EXIST' },
    Accepted: { id: 1, value: 'Accepted', label: 'BID_STATE_ACCEPTED' },
    Canceled: { id: 2, value: 'Canceled', label: 'BID_STATE_CANCELED' },
    Expired: { id: 3, value: 'Expired', label: 'BID_STATE_EXPIRED' },
    Completed: { id: 4, value: 'Completed', label: 'BID_STATE_COMPLETED' }
}

const BidStatesValues = objPropsById(BID_STATES, 'value')
const BidStatesLabels = objPropsById(BID_STATES, 'label')

const TIMEOUTS = [
    { value: toMilliseconds({ minutes: 30 }), label: 'BID_TIMEOUT_MINUTES', labelArgs: [30] },
    { value: toMilliseconds({ hours: 1 }), label: 'BID_TIMEOUT_HOUR', labelArgs: [1] },
    { value: toMilliseconds({ hours: 6 }), label: 'BID_TIMEOUT_HOURS', labelArgs: [6] },
    { value: toMilliseconds({ hours: 12 }), label: 'BID_TIMEOUT_HOURS', labelArgs: [12] },
    { value: toMilliseconds({ hours: 24 }), label: 'BID_TIMEOUT_HOURS', labelArgs: [24] },
    { value: toMilliseconds({ hours: 48 }), label: 'BID_TIMEOUT_HOURS', labelArgs: [48] },
    { value: toMilliseconds({ days: 3 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [3] },
    { value: toMilliseconds({ days: 7 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [7] },
    { value: toMilliseconds({ days: 14 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [14] },
    { value: toMilliseconds({ days: 30 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [30] },
    { value: toMilliseconds({ days: 90 }), label: 'BID_TIMEOUT_DAYS', labelArgs: [90] }
]

const timeoutsByValue = mapArrayByProp(TIMEOUTS, 'value')

module.exports = {
    BID_STATES: BID_STATES,
    BidStatesValues: BidStatesValues,
    BidStatesLabels: BidStatesLabels,
    TIMEOUTS: TIMEOUTS,
    timeoutsByValue: timeoutsByValue
}