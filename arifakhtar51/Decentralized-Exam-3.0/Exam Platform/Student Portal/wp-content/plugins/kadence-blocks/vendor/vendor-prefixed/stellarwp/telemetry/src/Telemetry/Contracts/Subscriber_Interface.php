<?php
/**
 * The API implemented by all subscribers.
 *
 * @package KadenceWP\KadenceBlocks\StellarWP\Telemetry\Contracts
 *
 * @license GPL-2.0-or-later
 * Modified by kadencewp on 29-May-2024 using {@see https://github.com/BrianHenryIE/strauss}.
 */

namespace KadenceWP\KadenceBlocks\StellarWP\Telemetry\Contracts;

/**
 * Interface Subscriber_Interface
 *
 * @package KadenceWP\KadenceBlocks\StellarWP\Telemetry\Contracts
 */
interface Subscriber_Interface {

	/**
	 * Register action/filter listeners to hook into WordPress
	 *
	 * @return void
	 */
	public function register();
}
